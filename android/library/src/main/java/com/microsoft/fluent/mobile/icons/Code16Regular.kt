package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Code16: ImageVector
  get() {
    if (_code16 != null) {
      return _code16!!
    }
    _code16 = fluentIcon(name = "Regular.Code16", 16f) {
      materialPath {
          moveTo(9.803F, 3.043F)
          curveToRelative(0.252F, 0.112F, 0.366F, 0.408F, 0.254F, 0.66F)
          lineToRelative(-4.0F, 9.0F)
          curveToRelative(-0.112F, 0.253F, -0.408F, 0.366F, -0.66F, 0.254F)
          curveToRelative(-0.252F, -0.112F, -0.366F, -0.408F, -0.254F, -0.66F)
          lineToRelative(4.0F, -9.0F)
          curveToRelative(0.112F, -0.252F, 0.408F, -0.366F, 0.66F, -0.254F)
          close()
          moveToRelative(-5.47F, 2.333F)
          curveToRelative(0.206F, 0.184F, 0.224F, 0.5F, 0.04F, 0.706F)
          lineTo(2.67F, 8.0F)
          lineToRelative(1.705F, 1.918F)
          curveToRelative(0.183F, 0.206F, 0.165F, 0.522F, -0.042F, 0.706F)
          curveToRelative(-0.206F, 0.183F, -0.522F, 0.165F, -0.706F, -0.042F)
          lineToRelative(-2.0F, -2.25F)
          curveToRelative(-0.168F, -0.19F, -0.168F, -0.475F, 0.0F, -0.664F)
          lineToRelative(2.0F, -2.25F)
          curveToRelative(0.184F, -0.206F, 0.5F, -0.225F, 0.706F, -0.042F)
          close()
          moveToRelative(7.335F, 0.0F)
          curveToRelative(0.206F, -0.183F, 0.522F, -0.164F, 0.706F, 0.042F)
          lineToRelative(2.0F, 2.25F)
          curveToRelative(0.168F, 0.19F, 0.168F, 0.475F, 0.0F, 0.664F)
          lineToRelative(-2.0F, 2.25F)
          curveToRelative(-0.184F, 0.207F, -0.5F, 0.225F, -0.706F, 0.042F)
          curveToRelative(-0.207F, -0.184F, -0.225F, -0.5F, -0.042F, -0.706F)
          lineTo(13.331F, 8.0F)
          lineToRelative(-1.705F, -1.918F)
          curveToRelative(-0.183F, -0.206F, -0.165F, -0.522F, 0.042F, -0.706F)
          close()        
      }
    }
    return _code16!!
  }

private var _code16: ImageVector? = null
