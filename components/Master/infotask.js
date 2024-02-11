import { View, Text, Image,StyleSheet } from "react-native"
import { widthPercentageToDP } from "react-native-responsive-screen"



export default function TaskCardInModal(props){
    const { object_name, work_category, type_of_work, task_stage_name} = props

    let image
    let secondPart
    let firstPart
    let statusImage
    if(work_category=="Видеонаблюдение"){
        image = require('../../assets/images/camera.png')
        secondPart="видеонаблюдения"
        styles.image={position:'absolute', width:30, height:29, left:10}
    }else{
        image=require('../../assets/images/signal.png')
        secondPart="пожарной сигнализации"
        styles.image={position:'absolute', width:20, height:25, left:10}
    }
    if(type_of_work=="Монтаж"){
        firstPart="Монтаж "
    }else if(type_of_work=="Ремонт"){
        firstPart="Ремонт "
    }else{
        firstPart="Обслуживание "
    }
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
    let endName = firstPart+secondPart
    return(
        
        <View style={styles.externalView} className={classnames[0].externalView}>
        <Image source={image} className={classnames[0].image} style={styles.image}/>
        <Text style={styles.text_name}>
            {object_name}
        </Text>               
        <Image source={statusImage} style={{position:'absolute',left:widthPercentageToDP(68),width:25, height:25}}/>
    </View>
        
    )
}

const classnames = 
[
  {
    "externalView": "flex-row border-t-2",
    "image": "rounded",
   

  }
]

const styles = StyleSheet.create({

    externalView:{
        width:widthPercentageToDP(94),
        height:42,
        alignItems:'center',
    },
    image: {
        width:40,
        height:29,
        position:'absolute',
        left:5
    },
    text_name:{
        position:'absolute',
        left:75,
        fontSize:13,
        fontFamily:'Bold',
        width:250
    },
    text_stage:{
        fontSize:widthPercentageToDP(3)
    }
})