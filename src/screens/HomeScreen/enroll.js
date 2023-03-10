import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { IndexPath, Icon, Button, Modal, Avatar, Input, Text, Select, RadioGroup, Radio, SelectItem, Layout, Datepicker } from '@ui-kitten/components';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';


import { View, StyleSheet, Alert, PermissionsAndroid, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';


const formSchema = yup.object({
  name: yup.string().required("Bạn chưa nhập họ tên"),
  codeStudent: yup.string().required("Bạn chưa nhập mã số sinh viên").min(8, "Mã số sinh viên không hợp lệ"),
  major: yup.string().required("Bạn chưa nhập ngành học"),
  course: yup.string().required("Bạn chưa nhập khóa"),
  codeClass: yup.string().required("Bạn chưa nhập mã lớp"),
  email: yup.string().required("Bạn chưa nhập Email").email("Email không hợp lệ"),
  dateOfBirth: yup.date().required('Bạn chưa nhập ngày sinh').max(new Date(), "Bạn không thể nhập ngày sinh là ngày trong tương lai"),
  phone: yup.string().required("Bạn chưa nhập số điện thoại").min(10, "Số điện thoại không hợp lệ"),
  religion: yup.string().required("Bạn chưa nhập tôn giáo. Nếu không có vui lòng điền KHÔNG"),
  ethnic: yup.string().required("Bạn chưa nhập dân tộc"),
  // doanOrDang: 0,
  // gender: 0,
  address: yup.string().required("Bạn chưa nhập quê quán"),
  // lienChiHoi: yup.string().equals("--Chọn--").required("Bạn chưa chọn Liên chi hội"),
  // chiHoi: yup.string().equals("--Chọn--").required("Bạn chưa chọn Chi hội")

})
const CalendarIcon = (props) => (
  <Feather name="calendar" size={24} color="#02598C" />
);
export default class EnrollScreen extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      selectedLienChiHoiIndex: new IndexPath(0),
      selectedChiHoiIndex: new IndexPath(0),
      selectedGenderIndex: 0,
      selectedDoanOrDangIndex: 0,
      selectedDate: new Date(),
      visibleModal: false,
      singleFile: null
    }
  }

  render() {

    const checkPermissions = async () => {
      try {
        const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

        if (!result) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: 'Bạn cần cấp quyền để tải và lưu file',
              message: 'Ứng dụng cần truy cập camera ',
              buttonNeutral: 'Hỏi tôi sau',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Bạn có thể dùng camera');
            return true;
          } else {
            Alert.alert('Error', I18n.t('PERMISSION_ACCESS_FILE'));

            console.log('Camera từ chối truy cập');
            return false;
          }
        } else {
          return true;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    };

    const uploadImage = async (values) => {
      const BASE_URL = 'xxxx';
      // console.log(this.state.singleFile);
      console.log(values);
      // Check if any file is selected or not
      if (this.state.singleFile != null) {
        // If file selected then create FormData
        const data = new FormData();

        data.append('file_attachment', {
          uri: this.state.singleFile.uri,
          name: this.state.singleFile.name,
          type: this.state.singleFile.mimeType,
        });
        console.log(data.getAll("file_attachment"));

        // return
        try {
          let res = await fetch(BASE_URL + 'tutorial/upload.php', {
            method: 'post',
            body: data,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            timeout: 5000,
          });

          let result = await res.json();
          console.log('result', result);
          if (result.status == 1) {
            Alert.alert('Info', result.msg);
          }
        } catch (error) {
          // Error retrieving data
          // Alert.alert('Error', error.message);
          console.log('error upload', error);
        }
      } else {
        // If no file selected the show alert
        Alert.alert('Please Select File first');
      }
    };

    const selectFile = async () => {
      try {
        const result = await checkPermissions();

        if (result) {
          const result = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: false,
            type: 'image/*',
          });

          if (result.type === 'success') {
            // Printing the log realted to the file
            console.log('res : ' + JSON.stringify(result));
            // Setting the state to show single file attributes
            this.setState({ singleFile: result });
          }
        }
      } catch (err) {
        this.setState({ singleFile: null });
        console.warn(err);
        return false;
      }
    }




    const data = [
      '--Chọn--',
      'Liên chi hội sinh viên Bến Tre',
      'Liên chi hội sinh viên Cà Mau',
      'Liên chi hội sinh viên Trà Vinh',
    ];
    function getSelectValue(selectedIndexPaths, options) {
      return options[selectedIndexPaths.row]
    }

    return (
      <Formik
        style={styles.background}
        validationSchema={formSchema}
        initialValues={{
          name: '',
          codeStudent: '',
          major: '',
          course: '',
          codeClass: '',
          email: '',
          dateOfBirth: new Date(),
          phone: '',
          religion: '',
          ethnic: '',
          doanOrDang: 0,
          gender: 0,
          address: '',
          lienChiHoi: new IndexPath(0),
          chiHoi: new IndexPath(0)
        }}
        onSubmit={(values) => {
          console.log(values);
          uploadImage(values);
        }}

      >
        {(props) => (
          <ScrollView>
            <View style={styles.mainBody}>
            <Avatar style={styles.avatar} shape='round' source={require('../../../assets/avatar-1.jpg')} />

              {/*Showing the data of selected Single file*/}
              {this.state.singleFile != null ? (
                <Text style={styles.textStyle}>
                  File Name: {this.state.singleFile.name ? this.state.singleFile.name : ''}
                  {'\n'}
                  Type: {this.state.singleFile.type ? this.state.singleFile.type : ''}
                  {'\n'}
                  File Size: {this.state.singleFile.size ? this.state.singleFile.size : ''}
                  {'\n'}
                  URI: {this.state.singleFile.uri ? this.state.singleFile.uri : ''}
                  {'\n'}
                </Text>
              ) : null}

              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={selectFile}>
                <Text style={styles.buttonTextStyle}>Chọn ảnh</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={uploadImage}>
                <Text style={styles.buttonTextStyle}>Upload File</Text>
              </TouchableOpacity> */}
            </View>




            <View style={styles.container}>
              <View style={styles.form}>
                <Input
                  label="Họ Tên"
                  style={styles.input}
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
                {props.errors.name && props.touched.name ? <Text style={styles.error}>{props.errors.name}</Text> : null}
                <Input
                  label="Mã số sinh viên"
                  style={styles.input}
                  onChangeText={props.handleChange('codeStudent')}
                  value={props.values.codeStudent}
                />
                {props.errors.codeStudent && props.touched.codeStudent ? <Text style={styles.error}>{props.errors.codeStudent}</Text> : null}
                <Input
                  label="Ngành học"
                  style={styles.input}
                  onChangeText={props.handleChange('major')}
                  value={props.values.major}
                />
                {props.errors.major && props.touched.major ? <Text style={styles.error}>{props.errors.major}</Text> : null}
                <Layout style={styles.flexInRow}>
                  <Layout style={styles.flexInRowItem} level='2'>
                    <Input
                      label="Khóa"
                      style={styles.inputLeft}
                      placeholder="Khóa"
                      onChangeText={props.handleChange('course')}
                      value={props.values.course}
                    />
                    {props.errors.course && props.touched.course ? <Text style={styles.error}>{props.errors.course}</Text> : null}
                  </Layout>

                  <Layout style={styles.flexInRowItem} level='1'>
                    <Input
                      label="Mã lớp"
                      style={styles.inputRight}
                      onChangeText={props.handleChange('codeClass')}
                      value={props.values.codeClass}
                    />
                    {props.errors.codeClass && props.touched.codeClass ? <Text style={styles.error}>{props.errors.codeClass}</Text> : null}
                  </Layout>
                </Layout>
                <Input
                  label="Email"
                  style={styles.input}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
                {props.errors.email && props.touched.email ? <Text style={styles.error}>{props.errors.email}</Text> : null}

                <Layout style={styles.flexInRow}>
                  <Layout style={styles.flexInRowItem} level='2'>
                    <Datepicker
                      label='Ngày sinh'
                      status='basic'
                      min={new Date('01-01-1900')}
                      max={new Date()}
                      placement="top start"
                      style={styles.inputLeft}
                      date={this.state.selectedDate}
                      value={props.values.dateOfBirth = this.state.selectedDate}
                      onSelect={nextDate => this.setState({ selectedDate: nextDate })}
                      accessoryRight={CalendarIcon}

                    />
                    {props.errors.dateOfBirth && props.touched.dateOfBirth ? <Text style={styles.error}>{props.errors.dateOfBirth}</Text> : null}
                  </Layout>

                  <Layout style={styles.flexInRowItem} level='1'>
                    <Input
                      label="Số điện thoại"
                      style={styles.inputRight}
                      onChangeText={props.handleChange('phone')}
                      value={props.values.phone}
                    />
                    {props.errors.phone && props.touched.phone ? <Text style={styles.error}>{props.errors.phone}</Text> : null}
                  </Layout>

                </Layout>
                <Layout style={styles.flexInRow}>
                  <Layout style={styles.flexInRowItem} level='2'>
                    <Input
                      label="Tôn giáo"
                      style={styles.inputLeft}
                      onChangeText={props.handleChange('religion')}
                      value={props.values.religion}
                    />
                    {props.errors.religion && props.touched.religion ? <Text style={styles.error}>{props.errors.religion}</Text> : null}
                  </Layout>

                  <Layout style={styles.flexInRowItem} level='1'>
                    <Input
                      label="Dân tộc"
                      style={styles.inputRight}
                      onChangeText={props.handleChange('ethnic')}
                      value={props.values.ethnic}
                    />
                    {props.errors.ethnic && props.touched.ethnic ? <Text style={styles.error}>{props.errors.ethnic}</Text> : null}
                  </Layout>

                </Layout>
                <Layout style={styles.flexInRow}>
                  <Layout style={styles.flexInRowItem} level='2'>
                    <View style={styles.flexInColumn}>
                      <Text style={styles.lblRadio}>Đoàn viên/Đảng viên</Text>
                      <RadioGroup
                        value={props.values.doanOrDang = this.state.selectedDoanOrDangIndex}

                        selectedIndex={this.state.selectedDoanOrDangIndex}
                        onChange={index => this.setState({ selectedDoanOrDangIndex: index })}>
                        <Radio style={styles.radio}>Đoàn viên</Radio>
                        <Radio style={styles.radio}>Đảng viên</Radio>
                      </RadioGroup>
                    </View>
                  </Layout>

                  <Layout style={styles.flexInRowItem} level='1'>
                    <View style={styles.flexInColumn}>
                      <Text style={styles.lblRadio}>Giới tính</Text>
                      <RadioGroup
                        value={props.values.gender = this.state.selectedGenderIndex}

                        selectedIndex={this.state.selectedGenderIndex}
                        onChange={index => this.setState({ selectedGenderIndex: index })}>
                        <Radio style={styles.radio}>Nam</Radio>
                        <Radio style={styles.radio}>Nữ</Radio>
                      </RadioGroup>
                    </View>
                  </Layout>
                </Layout>

                <Input
                  multiline={true}
                  numberOfLines={4}
                  label="Địa chỉ"
                  style={styles.inputLeft}
                  onChangeText={props.handleChange('address')}
                  value={props.values.address}
                />
                {props.errors.address && props.touched.address ? <Text style={styles.error}>{props.errors.address}</Text> : null}
                <Text style={styles.text}>Sau khi tìm hiểu và tán thành Điều lệ Hội Sinh viên Việt Nam, tôi xin được gia nhập Hội và tham gia sinh hoạt tại: </Text>
                <Select
                  label="Liên chi hội sinh viên"
                  status='basic'
                  style={styles.input}
                  value={props.values.lienChiHoi = getSelectValue(this.state.selectedLienChiHoiIndex, data)}
                  selectedIndex={this.state.selectedLienChiHoiIndex}
                  onSelect={index => this.setState({ selectedLienChiHoiIndex: index })} >
                  {data.map((tag, idx) =>
                    <SelectItem style={styles.txtItem} key={idx} title={tag} />
                  )}
                </Select>
                <Select
                  label="Chi hội sinh viên"
                  status='basic'
                  style={styles.input}
                  value={props.values.chiHoi = getSelectValue(this.state.selectedChiHoiIndex, data)}
                  selectedIndex={this.state.selectedChiHoiIndex}
                  onSelect={index => this.setState({ selectedChiHoiIndex: index })} >
                  {data.map((tag, idx) =>
                    <SelectItem style={styles.txtItem} key={idx} title={tag} />
                  )}
                </Select>
                <Text style={styles.text}>Tôi xin đảm bảo chấp hành tốt Điều lệ Hội và tham gia đầy đủ các hoạt động do Hội Sinh viên tổ chức và điều động.</Text>
                <View style={styles.submit}>
                  <TouchableOpacity
                    onPress={props.handleSubmit}
                    style={styles.btnSend}
                    activeOpacity={0.5}
                  >
                    <Text style={styles.txtSend}>Gửi</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    );
  }
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height,
  },
  form: {
    width: '94%',
    padding: 6,

  },
  error: {
    color: '#DB2A30'
  },
  input: {
    borderColor: '#02598C',
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputLeft: {
    borderColor: '#02598C',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 4,
  },
  inputRight: {
    borderColor: '#02598C',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 4
  },
  flexInRow: {
    flex: 1,
    flexDirection: 'row',

  },
  flexInRowItem: {
    margin: 0,
    width: '50%',
    padding: 0,
    backgroundColor: '#fff'
  },
  flexInColumn: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingTop: 5,
    paddingBottom: 5
  },
  radio: {
    margin: 4,
  },
  lblRadio: {
    fontSize: 12,
    color: '#8F9BB3',
    fontWeight: 800
  },
  txtItem: {
    color: '#8F9BB3',
  },
  text: {
    fontSize: 12,
    color: '#8F9BB3',
    fontWeight: 400,
    paddingTop: 6,
    paddingBottom: 6
  },
  submit: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
  btnSend: {
    width: '30%',
    borderRadius: 4,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#00649F",

  },
  txtSend: {
    color: '#fff'
  },





  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150
  },
  buttonStyle: {
    width: '30%',
    borderRadius: 4,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#00649F",
  },
  buttonTextStyle: {
    color: '#fff',
    // paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
})
