import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button} from 'react-native';

export default function App() {
    return ( 
        <View style = { styles.container }>
            <View style={styles.style1}>
                <Image
                    source={require('./assets/img/vs_blue.png')}
                    style={{width:'330px',height:'400px'}}
                ></Image>
            </View>
            <View style={styles.style2}>
                <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
            <View style={styles.styleImage}>
            <Image
                    source={require('./assets/img/star.png')}
                    style={{width:'25px', height: '25px'}}
                ></Image>
                <Image
                    source={require('./assets/img/star.png')}
                    style={{width:'25px', height: '25px'}}
                ></Image>
                <Image
                    source={require('./assets/img/star.png')}
                    style={{width:'25px', height: '25px'}}
                ></Image>
                <Image
                    source={require('./assets/img/star.png')}
                    style={{width:'25px', height: '25px'}}
                ></Image>
                <Image
                    source={require('./assets/img/star.png')}
                    style={{width:'25px', height: '25px'}}
                ></Image>
                <Text>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.style2}>
                <Text>1.790.000 đ</Text>
                <Text>1.790.000 đ</Text>                
            </View>
            <View style={styles.styleImage}>
                <Text style={{color: 'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image
                    source={require('./assets/img/Group 1.png')}
                    style={{width:'25px', height:'25px'}}
                ></Image>
            </View>
            <View style={styles.styleChonMau}>
                <Text>4 MÀU-CHỌN MÀU</Text>
                <Image
                    source={require('./assets/img/Vector.png')}
                    style={{width: '10px',height:'10px',}}
                ></Image>
            </View>
            <View style={styles.styleChonMua}>
               <Button title='CHỌN MUA' color={'red'}>CHỌN MUA</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style1: {
        flex: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    style2: {
        flex: 5,
        flexDirection: 'row',
        
    },
    styleImage:{
        flex: 5,
        flexDirection: 'row',
    },
    styleChonMau:{
        flex: 10,
        borderColor: 'black',
        borderWidth: '1px',
        borderRadius: '2px',
        width:'90%',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    styleChonMua:{
        flex: 10,
        justifyContent: 'space-around',
        alignItems: 'center',

    }
});