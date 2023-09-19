package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Balloon24: ImageVector
  get() {
    if (_balloon24 != null) {
      return _balloon24!!
    }
    _balloon24 = fluentIcon(name = "Filled.Balloon24", 24f) {
      materialPath {
          moveTo(5.0F, 9.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          curveToRelative(0.0F, 2.025F, -0.67F, 4.236F, -1.85F, 5.956F)
          curveToRelative(-1.042F, 1.52F, -2.543F, 2.731F, -4.4F, 2.992F)
          verticalLineToRelative(0.302F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.25F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(13.5F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineToRelative(-0.302F)
          curveToRelative(-1.857F, -0.261F, -3.357F, -1.473F, -4.4F, -2.992F)
          curveTo(5.67F, 13.236F, 5.0F, 11.025F, 5.0F, 9.0F)
          close()
          moveToRelative(7.92F, -3.894F)
          curveToRelative(-0.403F, -0.095F, -0.807F, 0.155F, -0.902F, 0.559F)
          curveToRelative(-0.095F, 0.403F, 0.155F, 0.806F, 0.558F, 0.901F)
          curveToRelative(0.916F, 0.216F, 1.639F, 0.938F, 1.856F, 1.853F)
          curveToRelative(0.096F, 0.403F, 0.5F, 0.652F, 0.903F, 0.556F)
          curveToRelative(0.403F, -0.096F, 0.652F, -0.5F, 0.556F, -0.903F)
          curveToRelative(-0.348F, -1.467F, -1.503F, -2.62F, -2.971F, -2.966F)
          close()        
      }
    }
    return _balloon24!!
  }

private var _balloon24: ImageVector? = null
