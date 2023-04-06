import React from "react";
import { View, Text, ImageBackground, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView , keyboardawa } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';


function header(){
    return(<>
    
    </>)
}

function profilescreen(props) {

    const [selected, setselected] = React.useState(null);
    const [isFocus, setIsFocus] = React.useState(false);

    const data = [
        { label: 'Banquet', value: '1' },
        { label: 'Hall', value: '2' },
    ]


    return (
        <>
       
            <View style={styles.wholecontainer}>
                <View style={styles.Mainview}>
                    <Text style={styles.Mainview_textstyle}> My Profile </Text>
                    <Text style={styles.Mainview_textstyle2}>Everything About you</Text>
                    {/* image */}
                </View>

                <KeyboardAvoidingView behavior="height"  >
                    <ScrollView showsVerticalScrollIndicator={false}>
                    
                        <View style={styles.container}>
                            <Text style={styles.label}>Vendor Name</Text>
                            <TextInput
                            placeholderTextColor={'black'}
                                placeholder='Central Venue'
                                style={styles.input} />
                            <Text style={styles.label}>Email Address</Text>

                            <TextInput
                            placeholderTextColor={'black'}

                                placeholder='Shafay@gmail.com'
                                style={styles.input} />

                            <Text style={styles.label}>phone Number</Text>
                            <TextInput
                            placeholderTextColor={'black'}

                                placeholder='+98 9991039943'
                                style={styles.input} />
                        </View>



                        <View style={styles.container}>

                            <Text style={styles.label}>Category</Text>

                            <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}

                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select item' : '...'}
                                searchPlaceholder="Search..."
                                value={selected}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setselected(item.value);
                                }}
                            />
                            {/* <SelectList boxStyles={{borderWidth:0,borderBottomWidth:1,borderRadius:0,borderColor:'#DBAEAE'}} closeicon={''} data={data} setSelected={setselected} /> */}
                        </View>

                        <View style={styles.container}>

                            <Text style={styles.label}>Address</Text>
                            <TextInput
                            placeholderTextColor={'black'}

                                placeholder='Banquet Address'
                                style={styles.input} />

                            <Text style={styles.label}>Person</Text>
                            <TextInput
                            placeholderTextColor={'black'}

                                placeholder='XYZ'
                                style={styles.input} />

                        </View>



                  

                    

                    <View style={styles.buttonview}>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.btntext}>UPDATE</Text>
                            </TouchableOpacity>

                        </View>
                        
                
                </ScrollView>
                </KeyboardAvoidingView>






            </View>



        </>)
}

const styles = StyleSheet.create({
    wholecontainer: { backgroundColor: '#e6e6e6' },
    container: {
        flex: 1,
        height: '100%',
        padding: 20,
        backgroundColor: '#ffffff',
        marginBottom: 2
    },

    label: {
        flex: 1,
        fontWeight: 'bold',
        marginTop: 20,
        fontFamily: 'sans-serif-medium',
        color: 'black',
    },
    Mainview: {
        height: 160,
        width: '100%',
        backgroundColor: '#e6e6e6'
    },
    Mainview_textstyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 40,
        marginLeft: 20,
    },
    Mainview_textstyle2: {
        color: '#C4A484',
        fontSize: 15,
        marginTop: 5,
        marginLeft: 30,
        fontFamily: "sans-serif-medium",
    },
    button: {
        marginBottom: 10,
        margin: 10,
        backgroundColor: '#9A2143',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 4,
        fontSize: 15,
        fontFamily: "sans-serif-medium",
    },
    label: {
        flex: 1,
        fontWeight: 'bold',
        marginTop: 20,
        fontFamily: 'sans-serif-medium',
        color: 'black',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomColor: '#DBAEAE',
        borderBottomWidth: 2,
        marginBottom: 10,
        marginTop: 5,
        padding: 1,
        color:'black'
    },
    buttonview: {



    },
    placeholderStyle: {
        fontSize: 16,
        color:'black'
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})


export default profilescreen;