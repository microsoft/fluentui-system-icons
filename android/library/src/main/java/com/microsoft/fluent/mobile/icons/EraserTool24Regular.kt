package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EraserTool24: ImageVector
  get() {
    if (_eraserTool24 != null) {
      return _eraserTool24!!
    }
    _eraserTool24 = fluentIcon(name = "Regular.EraserTool24", 24f) {
      materialPath {
          moveTo(3.75F, 2.0F)
          curveTo(4.164F, 2.0F, 4.5F, 2.336F, 4.5F, 2.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(15.0F)
          verticalLineTo(2.75F)
          curveTo(19.5F, 2.336F, 19.836F, 2.0F, 20.25F, 2.0F)
          reflectiveCurveTo(21.0F, 2.336F, 21.0F, 2.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(5.127F, 22.0F, 3.0F, 19.873F, 3.0F, 17.25F)
          verticalLineTo(2.75F)
          curveTo(3.0F, 2.336F, 3.336F, 2.0F, 3.75F, 2.0F)
          close()
          moveTo(19.5F, 8.5F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(15.0F)
          verticalLineTo(8.5F)
          close()
          moveToRelative(-15.0F, 8.75F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(8.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(13.5F)
          horizontalLineToRelative(-15.0F)
          verticalLineToRelative(3.75F)
          close()        
      }
    }
    return _eraserTool24!!
  }

private var _eraserTool24: ImageVector? = null
