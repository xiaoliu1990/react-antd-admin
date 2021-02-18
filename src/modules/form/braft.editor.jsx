import React, { useState } from 'react'
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
  return (
    <BraftEditor
      className="braft-editor"
      value={editorState}
      onChange={(e) => handleEditorChange(e)}
      onSave={() => submitContent()}
    />
  )
}
export default Editor;