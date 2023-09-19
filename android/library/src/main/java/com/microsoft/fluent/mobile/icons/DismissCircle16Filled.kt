package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DismissCircle16: ImageVector
  get() {
    if (_dismissCircle16 != null) {
      return _dismissCircle16!!
    }
    _dismissCircle16 = fluentIcon(name = "Filled.DismissCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveTo(6.534F, 5.839F)
          curveTo(6.34F, 5.704F, 6.07F, 5.723F, 5.896F, 5.896F)
          lineTo(5.84F, 5.966F)
          curveTo(5.704F, 6.16F, 5.723F, 6.43F, 5.896F, 6.604F)
          lineTo(7.293F, 8.0F)
          lineTo(5.896F, 9.396F)
          lineTo(5.84F, 9.466F)
          curveTo(5.704F, 9.66F, 5.723F, 9.93F, 5.896F, 10.104F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.195F, 0.135F, 0.464F, 0.116F, 0.638F, -0.057F)
          lineTo(8.0F, 8.707F)
          lineToRelative(1.396F, 1.397F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.195F, 0.135F, 0.464F, 0.116F, 0.638F, -0.057F)
          lineToRelative(0.057F, -0.07F)
          curveToRelative(0.135F, -0.195F, 0.116F, -0.464F, -0.057F, -0.638F)
          lineTo(8.707F, 8.0F)
          lineToRelative(1.397F, -1.396F)
          lineToRelative(0.057F, -0.07F)
          curveToRelative(0.135F, -0.195F, 0.116F, -0.464F, -0.057F, -0.638F)
          lineToRelative(-0.07F, -0.057F)
          curveTo(9.84F, 5.704F, 9.57F, 5.723F, 9.396F, 5.896F)
          lineTo(8.0F, 7.293F)
          lineTo(6.604F, 5.896F)
          lineTo(6.534F, 5.84F)
          close()        
      }
    }
    return _dismissCircle16!!
  }

private var _dismissCircle16: ImageVector? = null
