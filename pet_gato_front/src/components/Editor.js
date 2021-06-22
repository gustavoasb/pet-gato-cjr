import React from "react";
import axios from "axios"; // yarn add axioss
import ReactQuill from "react-quill"; // yarn add react-quill
import "react-quill/dist/quill.snow.css";

const colors = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
  "darkViolet"
];

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    [
      "bold",
      "italic",
      "underline",
      "strike",
      { color: colors },
      { background: colors },
      "blockquote",
      "code-block"
    ],
    [{ direction: "rtl" }, { align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    [{ script: "sub" }, { script: "super" }, "formula"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true
  }
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "script",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "code",
  "align",
  "direction",
  "code-block",
  "formula"
];

class Editor extends React.Component {
  state = {
    text: ""
  };

  handleChange = value => {
    this.setState({ text: value });
  };

  enviar = () => {
    //
    axios
      .post("http://localhost:3000/post", {
        content: this.state.text
      })
      .then(response => {
        console.log("foi é tetra");
      })
      .catch(error => {
        console.error("não foi ");
      });
  };

  render() {
    return (
      <>
        <ReactQuill
          theme="snow"
          value={this.state.text}
          onChange={this.handleChange}
          modules={modules}
          formats={formats}
        />
        <br />
        <button style={{ marginTop: "5em" }} onClick={this.enviar}>
          Enviar
        </button>
      </>
    );
  }
}

export default Editor;
