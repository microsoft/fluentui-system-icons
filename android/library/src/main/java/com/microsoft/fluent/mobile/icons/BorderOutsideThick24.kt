package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BorderOutsideThick24: ImageVector
  get() {
    if (_borderOutsideThick24 != null) {
      return _borderOutsideThick24!!
    }
    _borderOutsideThick24 = fluentIcon(name = "Filled.BorderOutsideThick24", 24f) {
      materialPath {
          moveTo(2.5F, 5.75F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          horizontalLineToRelative(12.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.75F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          verticalLineTo(5.75F)
          close()
          moveTo(5.75F, 5.0F)
          curveTo(5.336F, 5.0F, 5.0F, 5.336F, 5.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveTo(5.0F, 18.664F, 5.336F, 19.0F, 5.75F, 19.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(5.75F)
          curveTo(19.0F, 5.336F, 18.664F, 5.0F, 18.25F, 5.0F)
          horizontalLineTo(5.75F)
          close()        
      }
    }
    return _borderOutsideThick24!!
  }

private var _borderOutsideThick24: ImageVector? = null
