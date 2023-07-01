package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookContacts24: ImageVector
  get() {
    if (_bookContacts24 != null) {
      return _bookContacts24!!
    }
    _bookContacts24 = fluentIcon(name = "Filled.BookContacts24", 24f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          curveTo(5.12F, 2.0F, 4.0F, 3.12F, 4.0F, 4.5F)
          verticalLineToRelative(15.0F)
          curveTo(4.0F, 20.88F, 5.12F, 22.0F, 6.5F, 22.0F)
          horizontalLineToRelative(13.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(6.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          horizontalLineToRelative(14.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.5F)
          curveTo(20.5F, 3.12F, 19.38F, 2.0F, 18.0F, 2.0F)
          horizontalLineTo(6.5F)
          close()
          moveToRelative(9.0F, 10.25F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 1.0F, -1.383F, 1.75F, -3.25F, 1.75F)
          reflectiveCurveTo(9.0F, 13.75F, 9.0F, 12.75F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          close()
          moveTo(14.0F, 8.745F)
          curveToRelative(0.0F, 0.967F, -0.783F, 1.751F, -1.75F, 1.751F)
          reflectiveCurveToRelative(-1.75F, -0.784F, -1.75F, -1.75F)
          curveTo(10.5F, 7.779F, 11.283F, 7.0F, 12.25F, 7.0F)
          reflectiveCurveTo(14.0F, 7.779F, 14.0F, 8.745F)
          close()        
      }
    }
    return _bookContacts24!!
  }

private var _bookContacts24: ImageVector? = null
