package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonNote16: ImageVector
  get() {
    if (_personNote16 != null) {
      return _personNote16!!
    }
    _personNote16 = fluentIcon(name = "Filled.PersonNote16", 16f) {
      materialPath {
          moveTo(6.0F, 10.0F)
          verticalLineToRelative(3.928F)
          curveTo(3.469F, 13.549F, 2.0F, 11.752F, 2.0F, 10.0F)
          verticalLineTo(9.5F)
          curveTo(2.0F, 8.672F, 2.672F, 8.0F, 3.5F, 8.0F)
          horizontalLineToRelative(3.264F)
          curveTo(6.289F, 8.53F, 6.0F, 9.232F, 6.0F, 10.0F)
          close()
          moveToRelative(1.0F, -8.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveTo(8.519F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveTo(4.25F, 5.769F, 4.25F, 4.25F)
          reflectiveCurveTo(5.481F, 1.5F, 7.0F, 1.5F)
          close()
          moveTo(9.0F, 8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(0.5F, 5.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(13.776F, 14.0F, 13.5F, 14.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(9.224F, 14.0F, 9.0F, 13.776F, 9.0F, 13.5F)
          reflectiveCurveTo(9.224F, 13.0F, 9.5F, 13.0F)
          close()
          moveTo(9.0F, 10.5F)
          curveTo(9.0F, 10.224F, 9.224F, 10.0F, 9.5F, 10.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(13.776F, 11.0F, 13.5F, 11.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(9.224F, 11.0F, 9.0F, 10.776F, 9.0F, 10.5F)
          close()        
      }
    }
    return _personNote16!!
  }

private var _personNote16: ImageVector? = null
