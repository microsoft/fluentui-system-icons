package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Branch20: ImageVector
  get() {
    if (_branch20 != null) {
      return _branch20!!
    }
    _branch20 = fluentIcon(name = "Filled.Branch20", 20f) {
      materialPath {
          moveTo(10.0F, 5.0F)
          curveToRelative(0.0F, 1.36F, -0.905F, 2.508F, -2.145F, 2.876F)
          curveTo(8.033F, 8.1F, 8.27F, 8.36F, 8.575F, 8.62F)
          curveTo(9.302F, 9.242F, 10.41F, 9.872F, 12.0F, 9.983F)
          curveTo(12.01F, 8.333F, 13.35F, 7.0F, 15.0F, 7.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          curveToRelative(-1.309F, 0.0F, -2.422F, -0.838F, -2.832F, -2.007F)
          curveToRelative(-1.96F, -0.078F, -3.342F, -0.841F, -4.243F, -1.613F)
          curveTo(7.769F, 9.246F, 7.627F, 9.112F, 7.5F, 8.982F)
          verticalLineToRelative(3.06F)
          curveTo(8.919F, 12.28F, 10.0F, 13.513F, 10.0F, 15.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          curveToRelative(0.0F, -1.486F, 1.081F, -2.72F, 2.5F, -2.959F)
          verticalLineTo(7.958F)
          curveTo(5.081F, 7.721F, 4.0F, 6.487F, 4.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()        
      }
    }
    return _branch20!!
  }

private var _branch20: ImageVector? = null
