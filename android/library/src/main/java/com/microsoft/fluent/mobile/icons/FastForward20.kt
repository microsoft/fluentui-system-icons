package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FastForward20: ImageVector
  get() {
    if (_fastForward20 != null) {
      return _fastForward20!!
    }
    _fastForward20 = fluentIcon(name = "Regular.FastForward20", 20f) {
      materialPath {
          moveTo(10.018F, 5.486F)
          curveToRelative(0.0F, -0.819F, 0.931F, -1.29F, 1.592F, -0.806F)
          lineToRelative(5.88F, 4.312F)
          curveToRelative(0.68F, 0.499F, 0.68F, 1.516F, 0.0F, 2.015F)
          lineToRelative(-5.88F, 4.312F)
          curveToRelative(-0.66F, 0.485F, -1.592F, 0.013F, -1.592F, -0.806F)
          verticalLineToRelative(-3.16F)
          lineTo(4.61F, 15.319F)
          curveToRelative(-0.66F, 0.485F, -1.592F, 0.013F, -1.592F, -0.806F)
          verticalLineTo(5.486F)
          curveToRelative(0.0F, -0.819F, 0.931F, -1.29F, 1.592F, -0.806F)
          lineToRelative(5.408F, 3.966F)
          verticalLineToRelative(-3.16F)
          close()
          moveToRelative(6.88F, 4.312F)
          lineToRelative(-5.88F, -4.312F)
          verticalLineToRelative(9.027F)
          lineToRelative(5.88F, -4.312F)
          curveToRelative(0.136F, -0.1F, 0.136F, -0.303F, 0.0F, -0.403F)
          close()
          moveToRelative(-7.0F, 0.0F)
          lineToRelative(-5.88F, -4.312F)
          verticalLineToRelative(9.027F)
          lineToRelative(5.88F, -4.312F)
          curveToRelative(0.136F, -0.1F, 0.136F, -0.303F, 0.0F, -0.403F)
          close()        
      }
    }
    return _fastForward20!!
  }

private var _fastForward20: ImageVector? = null
