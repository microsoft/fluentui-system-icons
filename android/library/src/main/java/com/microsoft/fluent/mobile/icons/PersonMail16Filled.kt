package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonMail16: ImageVector
  get() {
    if (_personMail16 != null) {
      return _personMail16!!
    }
    _personMail16 = fluentIcon(name = "Filled.PersonMail16", 16f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, 1.507F, 1.086F, 3.047F, 3.0F, 3.69F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.364F, 0.097F, -0.706F, 0.268F, -1.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 8.0F, 2.0F, 8.672F, 2.0F, 9.5F)
          verticalLineTo(10.0F)
          close()
          moveToRelative(5.0F, -8.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveTo(8.519F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveTo(4.25F, 5.769F, 4.25F, 4.25F)
          reflectiveCurveTo(5.481F, 1.5F, 7.0F, 1.5F)
          close()
          moveToRelative(3.51F, 10.427F)
          lineTo(6.013F, 9.304F)
          curveTo(6.109F, 8.568F, 6.738F, 8.0F, 7.5F, 8.0F)
          horizontalLineToRelative(6.0F)
          curveTo(14.328F, 8.0F, 15.0F, 8.672F, 15.0F, 9.5F)
          verticalLineToRelative(0.01F)
          lineToRelative(-4.49F, 2.417F)
          close()
          moveToRelative(0.227F, 1.013F)
          lineTo(15.0F, 10.645F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(6.672F, 15.0F, 6.0F, 14.328F, 6.0F, 13.5F)
          verticalLineToRelative(-3.046F)
          lineToRelative(4.248F, 2.478F)
          curveToRelative(0.15F, 0.088F, 0.336F, 0.09F, 0.49F, 0.008F)
          close()        
      }
    }
    return _personMail16!!
  }

private var _personMail16: ImageVector? = null
