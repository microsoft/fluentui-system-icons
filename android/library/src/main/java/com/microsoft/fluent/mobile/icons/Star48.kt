package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Star48: ImageVector
  get() {
    if (_star48 != null) {
      return _star48!!
    }
    _star48 = fluentIcon(name = "Filled.Star48", 48f) {
      materialPath {
          moveTo(21.803F, 6.085F)
          curveToRelative(0.899F, -1.82F, 3.495F, -1.82F, 4.394F, 0.0F)
          lineToRelative(4.852F, 9.832F)
          lineToRelative(10.85F, 1.577F)
          curveToRelative(2.01F, 0.292F, 2.813F, 2.762F, 1.358F, 4.179F)
          lineToRelative(-7.85F, 7.653F)
          lineToRelative(1.853F, 10.806F)
          curveToRelative(0.343F, 2.002F, -1.758F, 3.528F, -3.555F, 2.583F)
          lineTo(24.0F, 37.613F)
          lineToRelative(-9.705F, 5.102F)
          curveToRelative(-1.797F, 0.945F, -3.898F, -0.581F, -3.555F, -2.583F)
          lineToRelative(1.854F, -10.806F)
          lineToRelative(-7.851F, -7.653F)
          curveTo(3.287F, 20.256F, 4.09F, 17.786F, 6.1F, 17.494F)
          lineToRelative(10.85F, -1.577F)
          lineToRelative(4.853F, -9.832F)
          close()        
      }
    }
    return _star48!!
  }

private var _star48: ImageVector? = null
