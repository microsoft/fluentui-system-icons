package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Location28: ImageVector
  get() {
    if (_location28 != null) {
      return _location28!!
    }
    _location28 = fluentIcon(name = "Filled.Location28", 28f) {
      materialPath {
          moveTo(14.0F, 2.25F)
          curveToRelative(5.385F, 0.0F, 9.75F, 4.365F, 9.75F, 9.75F)
          curveToRelative(0.0F, 4.12F, -2.895F, 8.61F, -8.61F, 13.518F)
          curveToRelative(-0.656F, 0.563F, -1.624F, 0.563F, -2.283F, -0.002F)
          lineToRelative(-0.378F, -0.328F)
          curveTo(7.017F, 20.408F, 4.25F, 16.028F, 4.25F, 12.0F)
          curveToRelative(0.0F, -5.385F, 4.365F, -9.75F, 9.75F, -9.75F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          curveToRelative(0.0F, -2.071F, -1.679F, -3.75F, -3.75F, -3.75F)
          close()        
      }
    }
    return _location28!!
  }

private var _location28: ImageVector? = null
