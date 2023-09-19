package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DismissCircle16: ImageVector
  get() {
    if (_dismissCircle16 != null) {
      return _dismissCircle16!!
    }
    _dismissCircle16 = fluentIcon(name = "Regular.DismissCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(5.839F, 5.966F)
          lineToRelative(0.057F, -0.07F)
          curveTo(6.07F, 5.723F, 6.34F, 5.704F, 6.534F, 5.84F)
          lineToRelative(0.07F, 0.057F)
          lineTo(8.0F, 7.293F)
          lineToRelative(1.396F, -1.397F)
          curveTo(9.57F, 5.723F, 9.84F, 5.704F, 10.034F, 5.84F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          lineTo(8.707F, 8.0F)
          lineToRelative(1.397F, 1.396F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          curveTo(9.93F, 10.277F, 9.66F, 10.296F, 9.466F, 10.16F)
          lineToRelative(-0.07F, -0.057F)
          lineTo(8.0F, 8.707F)
          lineToRelative(-1.396F, 1.397F)
          curveTo(6.43F, 10.277F, 6.16F, 10.296F, 5.966F, 10.16F)
          lineToRelative(-0.07F, -0.057F)
          curveTo(5.723F, 9.93F, 5.704F, 9.66F, 5.84F, 9.466F)
          lineToRelative(0.057F, -0.07F)
          lineTo(7.293F, 8.0F)
          lineTo(5.896F, 6.604F)
          curveTo(5.723F, 6.43F, 5.704F, 6.16F, 5.84F, 5.966F)
          lineToRelative(0.057F, -0.07F)
          lineToRelative(-0.057F, 0.07F)
          close()        
      }
    }
    return _dismissCircle16!!
  }

private var _dismissCircle16: ImageVector? = null
