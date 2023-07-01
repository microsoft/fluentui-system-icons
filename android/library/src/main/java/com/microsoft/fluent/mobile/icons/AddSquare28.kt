package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AddSquare28: ImageVector
  get() {
    if (_addSquare28 != null) {
      return _addSquare28!!
    }
    _addSquare28 = fluentIcon(name = "Filled.AddSquare28", 28f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 4.679F, 4.679F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(14.5F)
          curveTo(23.321F, 3.0F, 25.0F, 4.679F, 25.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.75F)
          curveTo(4.679F, 25.0F, 3.0F, 23.321F, 3.0F, 21.25F)
          verticalLineTo(6.75F)
          close()
          moveTo(14.0F, 7.5F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.414F, 0.335F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.413F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.414F, -0.337F, -0.75F, -0.75F, -0.75F)
          close()        
      }
    }
    return _addSquare28!!
  }

private var _addSquare28: ImageVector? = null
