package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tag20: ImageVector
  get() {
    if (_tag20 != null) {
      return _tag20!!
    }
    _tag20 = fluentIcon(name = "Filled.Tag20", 20f) {
      materialPath {
          moveTo(18.006F, 4.033F)
          curveToRelative(-0.001F, -1.098F, -0.888F, -1.99F, -1.986F, -1.997F)
          lineToRelative(-4.89F, -0.032F)
          curveTo(10.594F, 2.0F, 10.081F, 2.211F, 9.703F, 2.588F)
          lineTo(3.022F, 9.252F)
          curveToRelative(-0.783F, 0.781F, -0.783F, 2.049F, -0.002F, 2.83F)
          lineToRelative(4.949F, 4.95F)
          curveToRelative(0.78F, 0.78F, 2.047F, 0.78F, 2.828F, 0.0F)
          lineToRelative(6.631F, -6.632F)
          curveToRelative(0.376F, -0.376F, 0.587F, -0.886F, 0.586F, -1.417F)
          lineToRelative(-0.008F, -4.95F)
          close()
          moveTo(14.0F, 7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()        
      }
    }
    return _tag20!!
  }

private var _tag20: ImageVector? = null
