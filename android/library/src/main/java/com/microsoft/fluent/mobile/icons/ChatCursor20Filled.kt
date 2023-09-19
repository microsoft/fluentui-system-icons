package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatCursor20: ImageVector
  get() {
    if (_chatCursor20 != null) {
      return _chatCursor20!!
    }
    _chatCursor20 = fluentIcon(name = "Filled.ChatCursor20", 20f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          curveTo(4.686F, 1.0F, 2.0F, 3.686F, 2.0F, 7.0F)
          curveToRelative(0.0F, 1.04F, 0.265F, 2.019F, 0.73F, 2.872F)
          lineToRelative(-0.71F, 2.49F)
          curveToRelative(-0.052F, 0.179F, 0.0F, 0.37F, 0.134F, 0.5F)
          curveToRelative(0.134F, 0.127F, 0.328F, 0.171F, 0.504F, 0.112F)
          lineToRelative(2.338F, -0.779F)
          curveTo(5.88F, 12.707F, 6.906F, 13.0F, 8.0F, 13.0F)
          curveToRelative(0.34F, 0.0F, 0.675F, -0.028F, 1.0F, -0.083F)
          verticalLineToRelative(-4.17F)
          curveToRelative(0.0F, -1.49F, 1.743F, -2.298F, 2.88F, -1.335F)
          lineToRelative(1.801F, 1.523F)
          curveTo(13.888F, 8.329F, 14.0F, 7.677F, 14.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveToRelative(2.0F, 7.746F)
          verticalLineToRelative(9.003F)
          curveToRelative(0.0F, 0.74F, 0.96F, 1.033F, 1.373F, 0.418F)
          lineToRelative(1.978F, -2.946F)
          curveTo(13.444F, 15.083F, 13.6F, 15.0F, 13.766F, 15.0F)
          horizontalLineToRelative(3.487F)
          curveToRelative(0.698F, 0.0F, 1.018F, -0.871F, 0.484F, -1.322F)
          lineToRelative(-6.502F, -5.504F)
          curveTo(10.747F, 7.76F, 10.0F, 8.108F, 10.0F, 8.746F)
          close()        
      }
    }
    return _chatCursor20!!
  }

private var _chatCursor20: ImageVector? = null
