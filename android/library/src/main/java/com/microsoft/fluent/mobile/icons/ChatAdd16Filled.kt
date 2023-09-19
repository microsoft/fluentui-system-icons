package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatAdd16: ImageVector
  get() {
    if (_chatAdd16 != null) {
      return _chatAdd16!!
    }
    _chatAdd16 = fluentIcon(name = "Filled.ChatAdd16", 16f) {
      materialPath {
          moveTo(1.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          curveToRelative(3.04F, 0.0F, 5.552F, 2.26F, 5.946F, 5.192F)
          curveTo(12.486F, 6.067F, 12.001F, 6.0F, 11.5F, 6.0F)
          curveTo(8.462F, 6.0F, 6.0F, 8.462F, 6.0F, 11.5F)
          curveToRelative(0.0F, 0.5F, 0.067F, 0.985F, 0.192F, 1.446F)
          curveToRelative(-0.79F, -0.107F, -1.534F, -0.367F, -2.196F, -0.751F)
          lineToRelative(-2.338F, 0.78F)
          curveToRelative(-0.176F, 0.058F, -0.37F, 0.014F, -0.504F, -0.114F)
          reflectiveCurveToRelative(-0.186F, -0.32F, -0.135F, -0.498F)
          lineToRelative(0.712F, -2.491F)
          curveTo(1.265F, 9.019F, 1.0F, 8.04F, 1.0F, 7.0F)
          close()
          moveToRelative(15.0F, 4.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(16.0F, 9.015F, 16.0F, 11.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveTo(12.0F, 9.224F, 11.776F, 9.0F, 11.5F, 9.0F)
          reflectiveCurveTo(11.0F, 9.224F, 11.0F, 9.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 11.0F, 9.0F, 11.224F, 9.0F, 11.5F)
          reflectiveCurveTo(9.224F, 12.0F, 9.5F, 12.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 11.0F, 13.5F, 11.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(9.5F)
          close()        
      }
    }
    return _chatAdd16!!
  }

private var _chatAdd16: ImageVector? = null
