package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneVerticalScroll20: ImageVector
  get() {
    if (_phoneVerticalScroll20 != null) {
      return _phoneVerticalScroll20!!
    }
    _phoneVerticalScroll20 = fluentIcon(name = "Filled.PhoneVerticalScroll20", 20f) {
      materialPath {
          moveTo(5.0F, 3.5F)
          curveTo(5.0F, 2.672F, 5.672F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.328F, 2.0F, 15.0F, 2.672F, 15.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.672F, 18.0F, 5.0F, 17.328F, 5.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(7.354F, 5.354F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(10.0F, 7.207F)
          lineToRelative(1.646F, 1.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          close()
          moveToRelative(-4.707F, 2.292F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.0F, 12.793F)
          lineToRelative(-1.646F, -1.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          close()        
      }
    }
    return _phoneVerticalScroll20!!
  }

private var _phoneVerticalScroll20: ImageVector? = null
