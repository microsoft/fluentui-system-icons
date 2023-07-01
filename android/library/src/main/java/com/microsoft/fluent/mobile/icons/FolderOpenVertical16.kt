package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FolderOpenVertical16: ImageVector
  get() {
    if (_folderOpenVertical16 != null) {
      return _folderOpenVertical16!!
    }
    _folderOpenVertical16 = fluentIcon(name = "Filled.FolderOpenVertical16", 16f) {
      materialPath {
          moveTo(3.0F, 11.667F)
          curveToRelative(0.0F, 0.706F, 0.425F, 1.343F, 1.077F, 1.615F)
          lineToRelative(3.846F, 1.603F)
          curveToRelative(0.17F, 0.07F, 0.342F, 0.107F, 0.51F, 0.115F)
          horizontalLineTo(8.5F)
          curveTo(8.776F, 15.0F, 9.0F, 14.776F, 9.0F, 14.5F)
          verticalLineTo(4.333F)
          curveToRelative(0.0F, -0.302F, -0.182F, -0.576F, -0.461F, -0.692F)
          lineTo(4.114F, 1.798F)
          curveTo(3.814F, 1.672F, 3.466F, 1.74F, 3.236F, 1.97F)
          curveTo(3.085F, 2.122F, 3.0F, 2.327F, 3.0F, 2.541F)
          verticalLineToRelative(9.126F)
          close()
          moveTo(4.8F, 1.0F)
          lineToRelative(4.123F, 1.718F)
          curveTo(9.575F, 2.99F, 10.0F, 3.627F, 10.0F, 4.333F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(0.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(9.203F)
          curveToRelative(0.0F, -0.08F, 0.013F, -0.16F, 0.039F, -0.237F)
          lineTo(12.91F, 6.35F)
          curveTo(12.97F, 6.172F, 13.0F, 5.985F, 13.0F, 5.797F)
          verticalLineTo(2.75F)
          curveTo(13.0F, 1.784F, 12.216F, 1.0F, 11.25F, 1.0F)
          horizontalLineTo(4.8F)
          close()        
      }
    }
    return _folderOpenVertical16!!
  }

private var _folderOpenVertical16: ImageVector? = null
