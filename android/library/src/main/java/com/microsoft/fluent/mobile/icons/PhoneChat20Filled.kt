package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneChat20: ImageVector
  get() {
    if (_phoneChat20 != null) {
      return _phoneChat20!!
    }
    _phoneChat20 = fluentIcon(name = "Filled.PhoneChat20", 20f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          curveTo(5.672F, 2.0F, 5.0F, 2.672F, 5.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(5.0F, 17.328F, 5.672F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(2.617F)
          lineToRelative(0.373F, -1.227F)
          curveTo(9.175F, 16.08F, 9.0F, 15.31F, 9.0F, 14.5F)
          curveTo(9.0F, 11.462F, 11.462F, 9.0F, 14.5F, 9.0F)
          curveToRelative(0.168F, 0.0F, 0.335F, 0.008F, 0.5F, 0.022F)
          verticalLineTo(3.5F)
          curveTo(15.0F, 2.672F, 14.328F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(8.0F, 17.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(16.985F, 10.0F, 14.5F, 10.0F)
          reflectiveCurveTo(10.0F, 12.015F, 10.0F, 14.5F)
          curveToRelative(0.0F, 0.792F, 0.204F, 1.536F, 0.563F, 2.182F)
          lineToRelative(-0.544F, 1.789F)
          curveToRelative(-0.095F, 0.313F, 0.197F, 0.605F, 0.51F, 0.51F)
          lineToRelative(1.79F, -0.544F)
          curveTo(12.965F, 18.796F, 13.709F, 19.0F, 14.5F, 19.0F)
          close()
          moveTo(12.0F, 13.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 14.0F, 16.5F, 14.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()
          moveToRelative(0.5F, 2.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 16.0F, 14.5F, 16.0F)
          horizontalLineToRelative(-2.0F)
          close()        
      }
    }
    return _phoneChat20!!
  }

private var _phoneChat20: ImageVector? = null
