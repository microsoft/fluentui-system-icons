package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataHistogram16: ImageVector
  get() {
    if (_dataHistogram16 != null) {
      return _dataHistogram16!!
    }
    _dataHistogram16 = fluentIcon(name = "Regular.DataHistogram16", 16f) {
      materialPath {
          moveTo(6.5F, 4.0F)
          verticalLineToRelative(9.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          close()
          moveToRelative(-1.0F, 3.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 14.0F, 2.0F, 13.776F, 2.0F, 13.5F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.5F)
          close()
          moveToRelative(0.0F, 6.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 8.0F, 3.0F, 8.448F, 3.0F, 9.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(2.5F)
          close()
          moveToRelative(5.0F, 0.0F)
          horizontalLineTo(13.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-1.5F)
          verticalLineToRelative(7.0F)
          close()        
      }
    }
    return _dataHistogram16!!
  }

private var _dataHistogram16: ImageVector? = null
