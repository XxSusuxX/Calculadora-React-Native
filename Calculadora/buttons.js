import React from "react";
import {
  Dimensions,
  ProgressBarAndroidComponent,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";

export default (props) => {
  const styleButtons = [styles.btn];
  if (props.double) {
    styleButtons.push(styles.btnDouble);
  }
  if (props.result) {
    styleButtons.push(styles.btnCont);
  }
  if (props.operator) {
    styleButtons.push(styles.btnOper);
  }
  if (props.ac) {
    styleButtons.push(styles.btnAC);
  }
  if (props.bs) {
    styleButtons.push(styles.btnBackSpace);
  }
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styleButtons}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    fontSize: 25,
    //height: "110px",
    //width: "180px",
    width: "24vw",
    height: "15vh",
    padding: 20,
    backgroundColor: "#000",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#777",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  btnOper: {
    color: "#0f0",
  },
  btnCont: {
    color: "#f00",
  },
  btnAC: {
    color: "#ff0",
  },
  btnBackSpace: {
    color: "#0ff",
  },
  btnDouble: {
    width: "270px" * 2,
  },
});
