package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ProhibitedMultiple16: ImageVector
  get() {
    if (_prohibitedMultiple16 != null) {
      return _prohibitedMultiple16!!
    }
    _prohibitedMultiple16 = fluentIcon(name = "Filled.ProhibitedMultiple16", 16f) {
      materialPath {
          moveTo(7.0F, 12.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(9.761F, 2.0F, 7.0F, 2.0F)
          reflectiveCurveTo(2.0F, 4.239F, 2.0F, 7.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveToRelative(0.0F, -1.5F)
          curveToRelative(-0.695F, 0.0F, -1.343F, -0.203F, -1.887F, -0.552F)
          lineToRelative(4.835F, -4.835F)
          curveTo(10.298F, 5.657F, 10.5F, 6.305F, 10.5F, 7.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          close()
          moveToRelative(1.887F, -6.448F)
          lineTo(4.052F, 8.887F)
          curveTo(3.702F, 8.343F, 3.5F, 7.695F, 3.5F, 7.0F)
          curveToRelative(0.0F, -1.933F, 1.567F, -3.5F, 3.5F, -3.5F)
          curveToRelative(0.695F, 0.0F, 1.343F, 0.203F, 1.887F, 0.552F)
          close()
          moveTo(13.0F, 7.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-0.39F, 0.0F, -0.77F, -0.037F, -1.14F, -0.108F)
          curveTo(6.72F, 13.585F, 7.812F, 14.0F, 9.0F, 14.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          curveToRelative(0.0F, -1.189F, -0.415F, -2.281F, -1.108F, -3.14F)
          curveTo(12.962F, 6.23F, 13.0F, 6.61F, 13.0F, 7.0F)
          close()        
      }
    }
    return _prohibitedMultiple16!!
  }

private var _prohibitedMultiple16: ImageVector? = null
