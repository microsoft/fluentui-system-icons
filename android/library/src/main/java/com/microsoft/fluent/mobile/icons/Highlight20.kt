package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Highlight20: ImageVector
  get() {
    if (_highlight20 != null) {
      return _highlight20!!
    }
    _highlight20 = fluentIcon(name = "Regular.Highlight20", 20f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(3.776F, 2.0F, 4.0F, 2.224F, 4.0F, 2.5F)
          verticalLineToRelative(4.0F)
          curveTo(4.0F, 6.776F, 4.224F, 7.0F, 4.5F, 7.0F)
          horizontalLineToRelative(11.0F)
          curveTo(15.776F, 7.0F, 16.0F, 6.776F, 16.0F, 6.5F)
          verticalLineToRelative(-4.0F)
          curveTo(16.0F, 2.224F, 16.224F, 2.0F, 16.5F, 2.0F)
          reflectiveCurveTo(17.0F, 2.224F, 17.0F, 2.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.653F, -0.417F, 1.209F, -1.0F, 1.415F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          verticalLineToRelative(2.073F)
          curveToRelative(0.0F, 0.758F, -0.428F, 1.45F, -1.106F, 1.789F)
          lineToRelative(-6.17F, 3.085F)
          curveToRelative(-0.155F, 0.078F, -0.34F, 0.07F, -0.487F, -0.022F)
          curveTo(6.09F, 17.835F, 6.0F, 17.673F, 6.0F, 17.5F)
          verticalLineTo(11.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(7.915F)
          curveTo(3.417F, 7.709F, 3.0F, 7.153F, 3.0F, 6.5F)
          verticalLineToRelative(-4.0F)
          curveTo(3.0F, 2.224F, 3.224F, 2.0F, 3.5F, 2.0F)
          close()
          moveTo(5.0F, 8.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(2.0F, 3.0F)
          verticalLineToRelative(5.691F)
          lineToRelative(5.447F, -2.724F)
          curveTo(12.786F, 13.798F, 13.0F, 13.452F, 13.0F, 13.073F)
          verticalLineTo(11.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _highlight20!!
  }

private var _highlight20: ImageVector? = null
