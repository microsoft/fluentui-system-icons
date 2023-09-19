package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookDefault20: ImageVector
  get() {
    if (_bookDefault20 != null) {
      return _bookDefault20!!
    }
    _bookDefault20 = fluentIcon(name = "Filled.BookDefault20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.776F, 18.0F, 15.5F, 18.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(2.75F, 0.0F)
          curveTo(6.336F, 4.0F, 6.0F, 4.336F, 6.0F, 4.75F)
          verticalLineToRelative(0.5F)
          curveTo(6.0F, 5.664F, 6.336F, 6.0F, 6.75F, 6.0F)
          horizontalLineToRelative(6.5F)
          curveTo(13.664F, 6.0F, 14.0F, 5.664F, 14.0F, 5.25F)
          verticalLineToRelative(-0.5F)
          curveTo(14.0F, 4.336F, 13.664F, 4.0F, 13.25F, 4.0F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _bookDefault20!!
  }

private var _bookDefault20: ImageVector? = null
