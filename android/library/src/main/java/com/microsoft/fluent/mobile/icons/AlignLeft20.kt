package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AlignLeft20: ImageVector
  get() {
    if (_alignLeft20 != null) {
      return _alignLeft20!!
    }
    _alignLeft20 = fluentIcon(name = "Regular.AlignLeft20", 20f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(3.224F, 2.0F, 3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(15.0F)
          curveTo(3.0F, 17.776F, 3.224F, 18.0F, 3.5F, 18.0F)
          reflectiveCurveTo(4.0F, 17.776F, 4.0F, 17.5F)
          verticalLineToRelative(-15.0F)
          curveTo(4.0F, 2.224F, 3.776F, 2.0F, 3.5F, 2.0F)
          close()
          moveTo(7.0F, 11.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(-1.0F, 2.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveTo(5.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveTo(5.895F, 9.0F, 5.0F, 8.105F, 5.0F, 7.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(6.448F, 5.0F, 6.0F, 5.448F, 6.0F, 6.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _alignLeft20!!
  }

private var _alignLeft20: ImageVector? = null
