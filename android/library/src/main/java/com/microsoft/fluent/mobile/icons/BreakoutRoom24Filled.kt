package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BreakoutRoom24: ImageVector
  get() {
    if (_breakoutRoom24 != null) {
      return _breakoutRoom24!!
    }
    _breakoutRoom24 = fluentIcon(name = "Filled.BreakoutRoom24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-5.036F)
          curveTo(13.512F, 20.15F, 14.0F, 19.007F, 14.0F, 17.75F)
          verticalLineToRelative(-3.0F)
          curveTo(14.0F, 12.127F, 11.873F, 10.0F, 9.25F, 10.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-1.257F, 0.0F, -2.4F, 0.488F, -3.25F, 1.286F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(0.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineToRelative(-3.0F)
          curveTo(4.455F, 11.5F, 3.0F, 12.955F, 3.0F, 14.75F)
          close()        
      }
    }
    return _breakoutRoom24!!
  }

private var _breakoutRoom24: ImageVector? = null
