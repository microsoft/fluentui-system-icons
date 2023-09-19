package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tab28: ImageVector
  get() {
    if (_tab28 != null) {
      return _tab28!!
    }
    _tab28 = fluentIcon(name = "Filled.Tab28", 28f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(15.5F)
          curveTo(23.545F, 3.0F, 25.0F, 4.455F, 25.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 25.0F, 3.0F, 23.545F, 3.0F, 21.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(6.25F, 5.0F)
          curveTo(5.56F, 5.0F, 5.0F, 5.56F, 5.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveTo(5.0F, 22.44F, 5.56F, 23.0F, 6.25F, 23.0F)
          horizontalLineToRelative(15.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(6.25F)
          curveTo(23.0F, 5.56F, 22.44F, 5.0F, 21.75F, 5.0F)
          horizontalLineTo(6.25F)
          close()        
      }
    }
    return _tab28!!
  }

private var _tab28: ImageVector? = null
