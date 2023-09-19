package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShapeUnion24: ImageVector
  get() {
    if (_shapeUnion24 != null) {
      return _shapeUnion24!!
    }
    _shapeUnion24 = fluentIcon(name = "Filled.ShapeUnion24", 24f) {
      materialPath {
          moveTo(5.25F, 2.0F)
          curveTo(3.455F, 2.0F, 2.0F, 3.455F, 2.0F, 5.25F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineTo(7.5F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(16.5F)
          verticalLineTo(5.25F)
          curveTo(16.5F, 3.455F, 15.045F, 2.0F, 13.25F, 2.0F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _shapeUnion24!!
  }

private var _shapeUnion24: ImageVector? = null
