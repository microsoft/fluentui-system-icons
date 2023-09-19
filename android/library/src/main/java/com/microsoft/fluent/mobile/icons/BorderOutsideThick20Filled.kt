package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BorderOutsideThick20: ImageVector
  get() {
    if (_borderOutsideThick20 != null) {
      return _borderOutsideThick20!!
    }
    _borderOutsideThick20 = fluentIcon(name = "Filled.BorderOutsideThick20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.0F, -1.0F)
          curveTo(5.448F, 5.0F, 5.0F, 5.448F, 5.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _borderOutsideThick20!!
  }

private var _borderOutsideThick20: ImageVector? = null
