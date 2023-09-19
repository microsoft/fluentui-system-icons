package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookContacts32: ImageVector
  get() {
    if (_bookContacts32 != null) {
      return _bookContacts32!!
    }
    _bookContacts32 = fluentIcon(name = "Regular.BookContacts32", 32f) {
      materialPath {
          moveTo(21.0F, 16.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineTo(17.0F)
          curveToRelative(0.0F, 1.971F, 1.86F, 4.0F, 5.0F, 4.0F)
          curveToRelative(3.14F, 0.0F, 5.0F, -2.029F, 5.0F, -4.0F)
          verticalLineToRelative(-0.5F)
          close()
          moveToRelative(-2.25F, -5.25F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          reflectiveCurveToRelative(-2.75F, 1.231F, -2.75F, 2.75F)
          reflectiveCurveTo(14.481F, 14.0F, 16.0F, 14.0F)
          reflectiveCurveToRelative(2.75F, -1.231F, 2.75F, -2.75F)
          close()
          moveTo(25.0F, 26.0F)
          horizontalLineTo(7.085F)
          curveToRelative(0.206F, 0.583F, 0.762F, 1.0F, 1.415F, 1.0F)
          horizontalLineTo(26.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.5F)
          curveTo(6.567F, 29.0F, 5.0F, 27.433F, 5.0F, 25.5F)
          verticalLineToRelative(-19.0F)
          curveTo(5.0F, 4.567F, 6.567F, 3.0F, 8.5F, 3.0F)
          horizontalLineToRelative(15.0F)
          curveTo(25.433F, 3.0F, 27.0F, 4.567F, 27.0F, 6.5F)
          verticalLineTo(24.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveTo(7.0F, 6.5F)
          verticalLineTo(24.0F)
          horizontalLineToRelative(18.0F)
          verticalLineTo(6.5F)
          curveTo(25.0F, 5.672F, 24.328F, 5.0F, 23.5F, 5.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(7.672F, 5.0F, 7.0F, 5.672F, 7.0F, 6.5F)
          close()        
      }
    }
    return _bookContacts32!!
  }

private var _bookContacts32: ImageVector? = null
