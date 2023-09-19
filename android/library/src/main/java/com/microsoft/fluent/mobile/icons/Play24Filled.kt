package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Play24: ImageVector
  get() {
    if (_play24 != null) {
      return _play24!!
    }
    _play24 = fluentIcon(name = "Filled.Play24", 24f) {
      materialPath {
          moveTo(5.0F, 5.274F)
          curveToRelative(0.0F, -1.707F, 1.826F, -2.792F, 3.325F, -1.977F)
          lineToRelative(12.362F, 6.726F)
          curveToRelative(1.566F, 0.853F, 1.566F, 3.101F, 0.0F, 3.953F)
          lineTo(8.325F, 20.702F)
          curveTo(6.826F, 21.518F, 5.0F, 20.432F, 5.0F, 18.726F)
          verticalLineTo(5.274F)
          close()        
      }
    }
    return _play24!!
  }

private var _play24: ImageVector? = null
