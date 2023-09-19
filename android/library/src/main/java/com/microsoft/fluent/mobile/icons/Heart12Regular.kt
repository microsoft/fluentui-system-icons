package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Heart12: ImageVector
  get() {
    if (_heart12 != null) {
      return _heart12!!
    }
    _heart12 = fluentIcon(name = "Regular.Heart12", 12f) {
      materialPath {
          moveTo(5.41F, 2.515F)
          curveToRelative(-0.957F, -0.75F, -2.329F, -0.681F, -3.2F, 0.213F)
          curveToRelative(-0.95F, 0.974F, -0.946F, 2.558F, 0.008F, 3.536F)
          lineTo(5.75F, 9.887F)
          curveToRelative(0.146F, 0.15F, 0.384F, 0.15F, 0.53F, 0.0F)
          lineToRelative(3.513F, -3.602F)
          curveToRelative(0.947F, -0.977F, 0.944F, -2.556F, -0.01F, -3.535F)
          curveToRelative(-0.878F, -0.901F, -2.254F, -0.978F, -3.21F, -0.226F)
          curveTo(6.49F, 2.59F, 6.409F, 2.662F, 6.333F, 2.74F)
          lineTo(5.995F, 3.086F)
          lineToRelative(-0.34F, -0.35F)
          curveToRelative(-0.078F, -0.08F, -0.16F, -0.153F, -0.246F, -0.22F)
          close()
          moveTo(7.048F, 3.44F)
          curveToRelative(0.555F, -0.57F, 1.451F, -0.573F, 2.018F, 0.009F)
          curveTo(9.643F, 4.04F, 9.643F, 5.0F, 9.074F, 5.588F)
          verticalLineTo(5.59F)
          lineToRelative(-3.06F, 3.138F)
          lineToRelative(-3.08F, -3.16F)
          curveTo(2.356F, 4.972F, 2.358F, 4.007F, 2.926F, 3.425F)
          curveToRelative(0.553F, -0.568F, 1.449F, -0.57F, 2.014F, 0.009F)
          lineToRelative(0.34F, 0.349F)
          curveToRelative(0.188F, 0.193F, 0.447F, 0.302F, 0.716F, 0.302F)
          curveToRelative(0.27F, 0.0F, 0.529F, -0.11F, 0.717F, -0.303F)
          lineTo(7.048F, 3.44F)
          close()        
      }
    }
    return _heart12!!
  }

private var _heart12: ImageVector? = null
