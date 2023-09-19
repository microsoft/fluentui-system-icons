package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleLine24: ImageVector
  get() {
    if (_circleLine24 != null) {
      return _circleLine24!!
    }
    _circleLine24 = fluentIcon(name = "Filled.CircleLine24", 24f) {
      materialPath {
          moveTo(21.972F, 12.75F)
          horizontalLineTo(2.027F)
          curveTo(2.411F, 17.922F, 6.73F, 22.0F, 12.0F, 22.0F)
          curveToRelative(5.27F, 0.0F, 9.588F, -4.078F, 9.972F, -9.25F)
          close()
          moveToRelative(0.0F, -1.5F)
          horizontalLineTo(2.027F)
          curveTo(2.411F, 6.077F, 6.73F, 2.0F, 12.0F, 2.0F)
          curveToRelative(5.27F, 0.0F, 9.588F, 4.077F, 9.972F, 9.25F)
          close()        
      }
    }
    return _circleLine24!!
  }

private var _circleLine24: ImageVector? = null
