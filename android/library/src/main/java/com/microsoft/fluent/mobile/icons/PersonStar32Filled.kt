package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonStar32: ImageVector
  get() {
    if (_personStar32 != null) {
      return _personStar32!!
    }
    _personStar32 = fluentIcon(name = "Filled.PersonStar32", 32f) {
      materialPath {
          moveTo(15.0F, 16.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          close()
          moveToRelative(-8.5F, 2.0F)
          curveTo(4.567F, 18.0F, 3.0F, 19.567F, 3.0F, 21.5F)
          verticalLineTo(22.0F)
          curveToRelative(0.0F, 2.393F, 1.523F, 4.417F, 3.685F, 5.793F)
          curveTo(8.859F, 29.177F, 11.802F, 30.0F, 15.0F, 30.0F)
          curveToRelative(0.744F, 0.0F, 1.475F, -0.045F, 2.185F, -0.13F)
          curveTo(15.237F, 28.219F, 14.0F, 25.754F, 14.0F, 23.0F)
          curveToRelative(0.0F, -1.85F, 0.558F, -3.57F, 1.516F, -5.0F)
          horizontalLineTo(6.5F)
          close()
          moveToRelative(24.0F, 5.0F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          close()
          moveToRelative(-8.212F, -4.862F)
          lineToRelative(-0.94F, 2.828F)
          horizontalLineToRelative(-2.994F)
          curveToRelative(-0.731F, 0.0F, -1.03F, 0.938F, -0.434F, 1.361F)
          lineToRelative(2.406F, 1.707F)
          lineToRelative(-0.929F, 2.792F)
          curveToRelative(-0.228F, 0.687F, 0.555F, 1.267F, 1.146F, 0.848F)
          lineTo(23.0F, 25.931F)
          lineToRelative(2.457F, 1.743F)
          curveToRelative(0.591F, 0.42F, 1.374F, -0.16F, 1.146F, -0.848F)
          lineToRelative(-0.93F, -2.792F)
          lineToRelative(2.407F, -1.707F)
          curveToRelative(0.597F, -0.423F, 0.297F, -1.361F, -0.434F, -1.361F)
          horizontalLineToRelative(-2.994F)
          lineToRelative(-0.94F, -2.828F)
          curveToRelative(-0.228F, -0.684F, -1.196F, -0.684F, -1.424F, 0.0F)
          close()        
      }
    }
    return _personStar32!!
  }

private var _personStar32: ImageVector? = null
