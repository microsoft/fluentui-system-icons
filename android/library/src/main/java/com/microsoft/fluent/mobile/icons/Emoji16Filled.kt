package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Emoji16: ImageVector
  get() {
    if (_emoji16 != null) {
      return _emoji16!!
    }
    _emoji16 = fluentIcon(name = "Filled.Emoji16", 16f) {
      materialPath {
          moveTo(8.0F, 14.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          close()
          moveTo(6.25F, 7.75F)
          curveTo(6.664F, 7.75F, 7.0F, 7.414F, 7.0F, 7.0F)
          reflectiveCurveTo(6.664F, 6.25F, 6.25F, 6.25F)
          reflectiveCurveTo(5.5F, 6.586F, 5.5F, 7.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          close()
          moveTo(6.136F, 9.666F)
          curveToRelative(-0.184F, -0.205F, -0.5F, -0.223F, -0.705F, -0.039F)
          curveToRelative(-0.206F, 0.185F, -0.224F, 0.5F, -0.04F, 0.707F)
          curveTo(6.031F, 11.049F, 6.963F, 11.5F, 8.0F, 11.5F)
          reflectiveCurveToRelative(1.969F, -0.451F, 2.609F, -1.166F)
          curveToRelative(0.184F, -0.206F, 0.166F, -0.522F, -0.04F, -0.707F)
          curveToRelative(-0.205F, -0.184F, -0.521F, -0.166F, -0.705F, 0.04F)
          curveTo(9.405F, 10.178F, 8.74F, 10.5F, 8.0F, 10.5F)
          reflectiveCurveToRelative(-1.405F, -0.321F, -1.864F, -0.834F)
          close()
          moveTo(9.75F, 7.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(9.0F, 6.586F, 9.0F, 7.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          close()        
      }
    }
    return _emoji16!!
  }

private var _emoji16: ImageVector? = null
