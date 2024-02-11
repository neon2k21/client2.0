import { useNavigation } from "@react-navigation/core"
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen"

const width = widthPercentageToDP(50)

export default function TaskCard(props){
    let statusImage
    if(task_stage_name=="Отмена"){
        statusImage = require('../../assets/images/statusBad.png')
    }
    if(task_stage_name=="Выполняется"){
        statusImage = require('../../assets/images/statusWork.png')
    }
    if(task_stage_name=="Новая заявка"){
        statusImage = require('../../assets/images/statusNew.png')
        styles.text_name.color='rgb(140,14,3)'
    }
    if(task_stage_name=="Готово к закрытию"){
        statusImage = require('../../assets/images/statusWait.png')
    }
    if(task_stage_name=="Выполнено"){
        statusImage = require('../../assets/images/statusPrinyato.png')
    }
    if(task_stage_name=="Просрочено"){
        statusImage = require('../../assets/images/statusFire.png')
    }
    const {navigate} = useNavigation()
    const { object_name, 
            object_image, 
            object_address,
            date_of_creation,  
            date_of_deadline, 
            user_fio, 
            user_phone, 
            task_stage_id,
            task_stage_name,
            type_of_work,
            work_category,
            task_id,
            description} = props
            if(task_stage_name=="Отмена"){
        statusImage = require('../../assets/images/statusBad.png')
    }
    if(task_stage_name=="Выполняется"){
        statusImage = require('../../assets/images/statusWork.png')
    }
    if(task_stage_name=="Новая заявка"){
        statusImage = require('../../assets/images/statusNew.png')
        styles.text_name.color='rgb(140,14,3)'
    }
    if(task_stage_name=="Готово к закрытию"){
        statusImage = require('../../assets/images/statusWait.png')
    }
    if(task_stage_name=="Выполнено"){
        statusImage = require('../../assets/images/statusPrinyato.png')
    }
    if(task_stage_name=="Просрочено"){
        statusImage = require('../../assets/images/statusFire.png')
    }

    return(
        <TouchableOpacity style={styles.externalView}
        onPress={()=>{
            global.master_object_name = object_name;
            global.master_object_image = object_image;
            global.master_object_address = object_address;
            global.master_date_of_creation = date_of_creation;
            global.master_date_of_deadline = date_of_deadline;
            global.master_user_fio = user_fio;
            global.master_user_phone = user_phone;
            global.master_task_stage_id = task_stage_id;
            global.master_task_stage_name = task_stage_name;
            global.master_type_of_work = type_of_work;
            global.master_work_category = work_category;
            global.master_task_id = task_id;
            global.master_description = description;
            navigate('Карточка объекта')
        }}>
             <View  style={styles.externalView}>

                
                <Image source={{uri: object_image}} className={classnames[0].image}/>
                <View style={styles.redView}/>
                <View style={styles.grayView}>
                    
                    <Text style={styles.text_name} >
                        {object_name}
                    </Text>
                    
                    <Text style={styles.text_deadline} >
                        До: {date_of_deadline}
                    
                    </Text>
                
                </View>
            <Image source={statusImage} style = {styles.statusImage}/>
            </View>
        
        </TouchableOpacity>
           
    )


}

const classnames = 
[
  {
    "externalView": "rounded",
    "image": "rounded w-full h-full",
    "grayView": "rounded-b w-full absolute"

  }
]

const styles = StyleSheet.create({


    externalView:{
        width:widthPercentageToDP(46),
        height:widthPercentageToDP(25),
        right:widthPercentageToDP(3),
        left:widthPercentageToDP(-1),
        top:widthPercentageToDP(2),
marginHorizontal:widthPercentageToDP(1),
borderRadius:5,
    },
  
    image: {
        width:'100%',
        height:'100%',
        position:'absolute',
        borderRadius:5,
    },
    text_name:{
        position:'absolute',
        color:'#fff',
        fontFamily:'Bold',
        fontSize:14,
        top: widthPercentageToDP(6),
        left:widthPercentageToDP(3)
    },
    text_deadline:{
        position:'absolute',
        fontFamily:'SemiBold',
        fontSize:10,
        color:'#fff',
        left:widthPercentageToDP(3),
        top:widthPercentageToDP(19)
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
    statusImage:{
        position:'absolute',
            width:widthPercentageToDP(7),
            height:widthPercentageToDP(7),
            top:widthPercentageToDP(-3),
            left:widthPercentageToDP(40.5)
    }
})