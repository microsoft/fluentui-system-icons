package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonLock16: ImageVector
  get() {
    if (_personLock16 != null) {
      return _personLock16!!
    }
    _personLock16 = fluentIcon(name = "Filled.PersonLock16", 16f) {
      materialPath {
          moveTo(9.5F, 8.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(8.875F)
          curveTo(8.392F, 9.0F, 8.0F, 9.403F, 8.0F, 9.9F)
          verticalLineToRelative(4.2F)
          curveTo(8.0F, 14.597F, 8.392F, 15.0F, 8.875F, 15.0F)
          horizontalLineToRelative(5.25F)
          curveTo(14.608F, 15.0F, 15.0F, 14.597F, 15.0F, 14.1F)
          verticalLineTo(9.9F)
          curveTo(15.0F, 9.403F, 14.608F, 9.0F, 14.125F, 9.0F)
          horizontalLineTo(13.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.0F, 5.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          close()
          moveTo(7.0F, 14.0F)
          verticalLineTo(9.9F)
          curveToRelative(0.0F, -0.898F, 0.628F, -1.685F, 1.5F, -1.863F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(2.672F, 8.0F, 2.0F, 8.672F, 2.0F, 9.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.971F, 1.86F, 4.0F, 5.0F, 4.0F)
          close()
          moveToRelative(2.75F, -9.75F)
          curveTo(9.75F, 2.731F, 8.519F, 1.5F, 7.0F, 1.5F)
          reflectiveCurveTo(4.25F, 2.731F, 4.25F, 4.25F)
          reflectiveCurveTo(5.481F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(2.75F, -1.231F, 2.75F, -2.75F)
          close()        
      }
    }
    return _personLock16!!
  }

private var _personLock16: ImageVector? = null
