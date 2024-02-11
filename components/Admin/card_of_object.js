import { useNavigation } from "@react-navigation/core"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import {ArrowRightCircleIcon} from "react-native-heroicons/solid"
import { widthPercentageToDP } from "react-native-responsive-screen"



export default function ObjectCard(props){
    const {navigate} = useNavigation()
    const {id, name, address, image, category, inn, owner, phone,task_count } = props
    if(task_count>0){
        styles.external=
    {

        width:widthPercentageToDP(46),
        height:widthPercentageToDP(25),
        right:widthPercentageToDP(3),
        left:widthPercentageToDP(-1),
        top:widthPercentageToDP(3),
        marginHorizontal:widthPercentageToDP(1),
        borderRadius:5,
        borderWidth:3,
        borderColor:'#8C0E03'
    }
    styles.grayView={
            position:'absolute',
            alignItems:'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width:'100%',
            height:'100%',

        }
        styles.redView={
            position:'absolute',
            backgroundColor: 'rgba(242, 93, 39, 0.5)',
            width:'100%',
            height:'100%',

        }
        styles.image={
            width:'100%',
            height:'100%',
            position:'absolute',
    
        }
        return (<TouchableOpacity  
            onPress={()=>{
            navigate('Карточка объекта');
            global.object_card = id;
            global.object_name = name;
            global.object_address = address;
            global.object_image = image;
            global.object_inn = inn;
            global.object_category = category;
            global.object_owner = owner;
            global.object_phone = phone;
            }}
            style={styles.external}>

                
                <Image source={{uri: image}} style={styles.image}/>
                <View style={styles.redView}/>
                <View  style={styles.grayView}/>
       
                        <Text style={styles.text} >
                            {name}
                        </Text>
                <Image source={require('../../assets/images/fireNumber.png')} style={styles.fireNumber}/>
                <Text style={styles.fireText}>{task_count}</Text>
                
                

        </TouchableOpacity>
    )
    }
    else{
        styles.grayView={
            position:'absolute',
            alignItems:'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width:'100%',
            height:'100%',
            borderRadius:5
        }
        styles.redView={
            position:'absolute',
            backgroundColor: 'rgba(242, 93, 39, 0.5)',
            width:'100%',
            height:'100%',
            borderRadius:5
        }
        styles.image={
            width:'100%',
            height:'100%',
            position:'absolute',
            borderRadius:5
        }
        styles.external=
    {

        width:widthPercentageToDP(46),
        height:widthPercentageToDP(25),
        right:widthPercentageToDP(3),
        left:widthPercentageToDP(-1),
        top:widthPercentageToDP(3),
marginHorizontal:widthPercentageToDP(1),
borderRadius:5,
    }
    return(
        <TouchableOpacity  
            onPress={()=>{
            navigate('Карточка объекта');
            global.object_card = id;
            global.object_name = name;
            global.object_address = address;
            global.object_image = image;
            global.object_inn = inn;
            global.object_category = category;
            global.object_owner = owner;
            global.object_phone = phone;
            }}
            style={styles.external}>

                
                <Image source={{uri: image}} style={styles.image}/>
                <View style={styles.redView}/>
                <View  style={styles.grayView}/>
       
                        <Text style={styles.text} >
                            {name}
                        </Text>
                {/* <Image source={require('../../screens/images/fireNumber.png')} style={styles.fireNumber}/>
                <Text style={styles.fireText}>12</Text> */}
                
                

        </TouchableOpacity>
    )
            }

}

const classnames = [
    "rounded-2xl",
    "rounded-2xl w-full h-full",
    "rounded-b-2xl w-full absolute flex-row",
    "w-full"
]


const styles = StyleSheet.create({
 external:
    {

        width:widthPercentageToDP(46),
        height:widthPercentageToDP(25),
        right:widthPercentageToDP(3),
        left:widthPercentageToDP(-1),
        top:widthPercentageToDP(5),
marginHorizontal:widthPercentageToDP(1),
borderRadius:5,
// borderWidth:2,

// borderColor:'#8C0E03'
    },
 internal:
    {
        alignItems:'center',
        backgroundColor: 'rgba(144,144,144,0.7)',
        bottom:-widthPercentageToDP(0.2),
        height:widthPercentageToDP(13)
    },
    image:{
        width:'100%',
        height:'100%',
        position:'absolute',
        borderRadius:5,

    },
 text:
    {
        position:'absolute',
        left:10,
        top:widthPercentageToDP(18),
        fontFamily:'Bold',
        fontSize:14,
        alignSelf:'center',
        color:'white',
        fontSize:widthPercentageToDP(2.5)
    },
    grayView:
        {
            position:'absolute',
            alignItems:'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width:'100%',
            height:'100%',
            borderRadius:5,

        },
        redView:{
            position:'absolute',
            backgroundColor: 'rgba(242, 93, 39, 0.5)',
            width:'100%',
            height:'100%',
            borderRadius:5,

        },
        fireNumber:{
            position:'absolute',
            width:widthPercentageToDP(8),
            height:widthPercentageToDP(10),
            top:widthPercentageToDP(-5),
            left:widthPercentageToDP(40)
        },
        fireText:{
            position:'absolute',
            fontFamily:'Black',
            fontSize:14,
            color:'#fff',
            top:widthPercentageToDP(-0.5),
            left:widthPercentageToDP(42.5),
            textAlign:'center'
        }

})