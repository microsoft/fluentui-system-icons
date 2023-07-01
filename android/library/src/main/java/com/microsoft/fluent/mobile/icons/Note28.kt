package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Note28: ImageVector
  get() {
    if (_note28 != null) {
      return _note28!!
    }
    _note28 = fluentIcon(name = "Filled.Note28", 28f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 4.679F, 4.679F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(14.5F)
          curveTo(23.321F, 3.0F, 25.0F, 4.679F, 25.0F, 6.75F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(-6.25F)
          curveTo(16.679F, 15.0F, 15.0F, 16.679F, 15.0F, 18.75F)
          verticalLineTo(25.0F)
          horizontalLineTo(6.75F)
          curveTo(4.679F, 25.0F, 3.0F, 23.321F, 3.0F, 21.25F)
          verticalLineTo(6.75F)
          close()
          moveTo(16.5F, 25.0F)
          horizontalLineToRelative(0.06F)
          lineTo(25.0F, 16.56F)
          verticalLineTo(16.5F)
          horizontalLineToRelative(-6.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          verticalLineTo(25.0F)
          close()        
      }
    }
    return _note28!!
  }

private var _note28: ImageVector? = null
