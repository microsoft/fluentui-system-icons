package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EraserTool24: ImageVector
  get() {
    if (_eraserTool24 != null) {
      return _eraserTool24!!
    }
    _eraserTool24 = fluentIcon(name = "Filled.EraserTool24", 24f) {
      materialPath {
          moveTo(4.5F, 2.75F)
          curveTo(4.5F, 2.336F, 4.164F, 2.0F, 3.75F, 2.0F)
          reflectiveCurveTo(3.0F, 2.336F, 3.0F, 2.75F)
          verticalLineToRelative(14.5F)
          curveTo(3.0F, 19.873F, 5.127F, 22.0F, 7.75F, 22.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          verticalLineTo(2.75F)
          curveTo(21.0F, 2.336F, 20.664F, 2.0F, 20.25F, 2.0F)
          reflectiveCurveTo(19.5F, 2.336F, 19.5F, 2.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(2.75F)
          close()
          moveToRelative(0.0F, 5.75F)
          horizontalLineToRelative(15.0F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(8.5F)
          close()        
      }
    }
    return _eraserTool24!!
  }

private var _eraserTool24: ImageVector? = null
