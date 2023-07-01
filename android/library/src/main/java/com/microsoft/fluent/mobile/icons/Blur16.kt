package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Blur16: ImageVector
  get() {
    if (_blur16 != null) {
      return _blur16!!
    }
    _blur16 = fluentIcon(name = "Filled.Blur16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          curveToRelative(1.777F, 0.0F, 3.374F, -0.773F, 4.472F, -2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(5.197F)
          curveToRelative(0.183F, -0.316F, 0.338F, -0.65F, 0.462F, -1.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(5.917F)
          curveTo(13.972F, 8.675F, 14.0F, 8.34F, 14.0F, 8.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(5.917F)
          curveToRelative(-0.058F, -0.344F, -0.145F, -0.678F, -0.258F, -1.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(5.197F)
          curveToRelative(-0.207F, -0.358F, -0.45F, -0.693F, -0.725F, -1.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(3.318F)
          curveTo(10.368F, 2.368F, 9.227F, 2.0F, 8.0F, 2.0F)
          close()        
      }
    }
    return _blur16!!
  }

private var _blur16: ImageVector? = null
