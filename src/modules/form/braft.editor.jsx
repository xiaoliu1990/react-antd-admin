import React, { useState } from 'react'
import { message } from 'antd';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
function Editor() {
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null))
  function handleEditorChange(editorState) {
    setEditorState(editorState)
  }
  function submitContent() {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = editorState.toHTML()
    console.log(htmlContent)
  }
  function myUploadFn(param) {
    const serverURL = 'upload.xx.com'
    const xhr = new XMLHttpRequest
    const fd = new FormData()
    const successFn = (res) => {
      // 假设服务端直接返回文件上传后的地址
      // 上传成功后调用param.success并传入上传后的文件地址
      let resObj = JSON.parse(res.currentTarget.response)
      param.success({
        url: resObj.data && resObj.data.url,
      })
    }
    const progressFn = (event) => {
      // 上传进度发生变化时调用param.progress
      param.progress(event.loaded / event.total * 100)
    }
    const errorFn = (response) => {
      // 上传发生错误时调用param.error
      param.error({
        msg: '无法上传...'
      })
    }
    xhr.upload.addEventListener("progress", progressFn, false)
    xhr.addEventListener("load", successFn, false)
    xhr.addEventListener("error", errorFn, false)
    xhr.addEventListener("abort", errorFn, false)
    fd.append('file', param.file)
    xhr.open('POST', serverURL, true)
    xhr.send(fd)
  }
  function myValidateFn(file) {
    if(file.size>1024 * 100){
      message.warning('不能上传超过100kb的图片');
    }
    return file.size < 1024 * 100
  }
  return (
    <BraftEditor
      className="braft-editor"
      value={editorState}
      media={{
        uploadFn: myUploadFn,
        validateFn: myValidateFn,
        accepts: {
          image: 'image/png,image/jpeg,image/gif',
          video: false,
          audio: false
        }
      }}
      onChange={handleEditorChange}
      onSave={submitContent}
    />
  )
}
export default Editor;