package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonHeart24: ImageVector
  get() {
    if (_personHeart24 != null) {
      return _personHeart24!!
    }
    _personHeart24 = fluentIcon(name = "Filled.PersonHeart24", 24f) {
      materialPath {
          moveTo(11.398F, 19.074F)
          curveToRelative(-1.373F, -1.372F, -1.665F, -3.416F, -0.877F, -5.075F)
          horizontalLineTo(4.253F)
          curveToRelative(-1.242F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          verticalLineToRelative(0.92F)
          curveToRelative(0.0F, 0.571F, 0.18F, 1.129F, 0.511F, 1.595F)
          curveTo(4.056F, 20.928F, 6.58F, 22.0F, 10.0F, 22.0F)
          curveToRelative(1.413F, 0.0F, 2.673F, -0.183F, 3.774F, -0.55F)
          lineToRelative(-2.376F, -2.376F)
          close()
          moveTo(10.0F, 2.004F)
          curveToRelative(2.762F, 0.0F, 5.0F, 2.238F, 5.0F, 5.0F)
          curveToRelative(0.0F, 2.761F, -2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveToRelative(7.044F, 20.991F)
          curveToRelative(-0.192F, 0.0F, -0.384F, -0.073F, -0.53F, -0.22F)
          lineToRelative(-4.409F, -4.408F)
          curveToRelative(-1.354F, -1.354F, -1.354F, -3.549F, 0.0F, -4.902F)
          curveToRelative(1.354F, -1.354F, 3.55F, -1.354F, 4.903F, 0.0F)
          lineToRelative(0.036F, 0.036F)
          lineToRelative(0.036F, -0.036F)
          curveToRelative(1.354F, -1.354F, 3.549F, -1.354F, 4.903F, 0.0F)
          curveToRelative(1.353F, 1.353F, 1.353F, 3.548F, 0.0F, 4.902F)
          lineToRelative(-4.409F, 4.409F)
          curveToRelative(-0.146F, 0.146F, -0.338F, 0.22F, -0.53F, 0.22F)
          close()        
      }
    }
    return _personHeart24!!
  }

private var _personHeart24: ImageVector? = null
