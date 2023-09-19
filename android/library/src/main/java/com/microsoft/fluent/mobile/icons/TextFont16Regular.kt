package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextFont16: ImageVector
  get() {
    if (_textFont16 != null) {
      return _textFont16!!
    }
    _textFont16 = fluentIcon(name = "Regular.TextFont16", 16f) {
      materialPath {
          moveTo(4.75F, 2.0F)
          curveToRelative(0.21F, 0.0F, 0.395F, 0.13F, 0.47F, 0.325F)
          lineTo(6.945F, 6.93F)
          lineTo(6.402F, 8.329F)
          lineTo(6.09F, 7.499F)
          horizontalLineTo(3.41F)
          lineTo(2.968F, 8.676F)
          curveToRelative(-0.097F, 0.258F, -0.385F, 0.39F, -0.643F, 0.292F)
          curveToRelative(-0.259F, -0.097F, -0.39F, -0.385F, -0.293F, -0.644F)
          lineToRelative(2.25F, -6.0F)
          curveTo(4.356F, 2.13F, 4.542F, 2.0F, 4.75F, 2.0F)
          close()
          moveTo(3.785F, 6.499F)
          horizontalLineToRelative(1.93F)
          lineTo(4.75F, 3.924F)
          lineTo(3.785F, 6.499F)
          close()
          moveToRelative(2.918F, 3.816F)
          lineToRelative(-0.008F, 0.022F)
          lineTo(5.66F, 13.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 13.0F, 5.0F, 13.224F, 5.0F, 13.5F)
          reflectiveCurveTo(5.224F, 14.0F, 5.5F, 14.0F)
          horizontalLineToRelative(0.431F)
          curveToRelative(0.047F, 0.007F, 0.093F, 0.006F, 0.138F, 0.0F)
          horizontalLineTo(7.5F)
          curveTo(7.776F, 14.0F, 8.0F, 13.776F, 8.0F, 13.5F)
          reflectiveCurveTo(7.776F, 13.0F, 7.5F, 13.0F)
          horizontalLineTo(6.733F)
          lineToRelative(0.774F, -1.993F)
          horizontalLineToRelative(3.984F)
          lineToRelative(0.776F, 1.998F)
          horizontalLineToRelative(-0.764F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.223F, -0.5F, 0.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.003F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.277F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(13.34F)
          lineTo(9.965F, 4.319F)
          curveToRelative(-0.075F, -0.193F, -0.26F, -0.32F, -0.466F, -0.32F)
          curveToRelative(-0.206F, 0.0F, -0.391F, 0.127F, -0.466F, 0.32F)
          lineToRelative(-2.33F, 5.996F)
          close()
          moveToRelative(4.4F, -0.308F)
          horizontalLineTo(7.895F)
          lineTo(9.499F, 5.88F)
          lineToRelative(1.603F, 4.127F)
          close()        
      }
    }
    return _textFont16!!
  }

private var _textFont16: ImageVector? = null
