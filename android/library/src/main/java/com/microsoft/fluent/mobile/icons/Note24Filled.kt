package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Note24: ImageVector
  get() {
    if (_note24 != null) {
      return _note24!!
    }
    _note24 = fluentIcon(name = "Filled.Note24", 24f) {
      materialPath {
          moveTo(17.75F, 3.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(-4.75F)
          curveTo(14.455F, 13.0F, 13.0F, 14.455F, 13.0F, 16.25F)
          verticalLineTo(21.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveToRelative(2.81F, 11.5F)
          lineToRelative(-6.06F, 6.06F)
          verticalLineToRelative(-4.31F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(4.31F)
          close()        
      }
    }
    return _note24!!
  }

private var _note24: ImageVector? = null
