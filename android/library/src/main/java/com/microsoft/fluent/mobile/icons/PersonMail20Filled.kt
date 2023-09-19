package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonMail20: ImageVector
  get() {
    if (_personMail20 != null) {
      return _personMail20!!
    }
    _personMail20 = fluentIcon(name = "Filled.PersonMail20", 20f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveTo(6.79F, 2.0F, 5.0F, 3.79F, 5.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(-4.991F, 9.0F)
          curveTo(2.903F, 11.0F, 2.0F, 11.887F, 2.0F, 13.0F)
          curveToRelative(0.0F, 1.691F, 0.833F, 2.966F, 2.135F, 3.797F)
          curveTo(5.417F, 17.614F, 7.145F, 18.0F, 9.0F, 18.0F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -1.103F, 0.893F, -1.998F, 1.996F, -2.0F)
          horizontalLineTo(4.009F)
          close()
          moveToRelative(10.5F, 4.927F)
          lineToRelative(-4.496F, -2.623F)
          curveTo(10.109F, 12.568F, 10.738F, 12.0F, 11.5F, 12.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(0.009F)
          lineToRelative(-4.49F, 2.418F)
          close()
          moveToRelative(0.228F, 1.013F)
          lineTo(19.0F, 14.645F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineToRelative(-3.046F)
          lineToRelative(4.248F, 2.478F)
          curveToRelative(0.15F, 0.088F, 0.336F, 0.09F, 0.49F, 0.008F)
          close()        
      }
    }
    return _personMail20!!
  }

private var _personMail20: ImageVector? = null
